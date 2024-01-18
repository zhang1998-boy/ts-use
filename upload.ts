/*
 * @Author: your name
 * @Date: 2024-01-18 20:12:07
 * @LastEditTime: 2024-01-18 21:35:32
 * @LastEditors: your name
 * @Description: 前端文件压缩  1 拿去文件 2转成base64(fileReader.readAsDataURL)  3 获取宽高 4 通过canvers 调整照片质量
 * @FilePath: \ts\ts-use\upload.ts
 * 
 */
interface Options {
  file: File,
  querty?: number,// 0.1-1
  success?: (base64: string) => void
}
// 压缩图片类
class CompressImg {
  options: Options
  fileReader = new FileReader()  //文件构造器
  constructor(options: Options) {
    this.options = options
    this.createBase64()
  }
  //将file对象转成base64，然后通过canvas.toDataUrl 压缩
  createBase64() {
    this.fileReader.onload = (e) => {
      console.log(e.target?.result, '最初的file大小');
      this.compress(e.target?.result as string)
    }
    this.fileReader.readAsDataURL(this.options.file) // 转成base64的url
  }
  // 压缩图片 1 先获取图片的宽高 2 通过canvas.drawImage画图片然后再通过canoves.toDataUrl 转成base64
  compress(url: string) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = url
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0, img.width, img.height)
      const base64 = canvas.toDataURL(this.options.file.type, this.options.querty)

      this.options.success(base64)
    }
  }

}

const file = document.querySelector("#bntIMg") as HTMLInputElement

file.addEventListener("change", (e) => {
  const traget = e.target as HTMLInputElement
  const fileObj = traget.files?.[0]
  if (fileObj) {
    new CompressImg({
      file: fileObj, success: (base64) => {
        console.log(base64, '现在的file大小');
        document.body.innerHTML = ` <img src=${base64}>`

      }
    })
  }
})