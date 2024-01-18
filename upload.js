class CompressImg {
    constructor(options) {
        this.fileReader = new FileReader(); //文件构造器
        this.options = options;
        this.createBase64();
    }
    //将file对象转成base64，然后通过canvas.toDataUrl 压缩
    createBase64() {
        this.fileReader.onload = (e) => {
            var _a, _b;
            console.log((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, '最初的file大小');
            this.compress((_b = e.target) === null || _b === void 0 ? void 0 : _b.result);
        };
        this.fileReader.readAsDataURL(this.options.file); // 转成base64的url
    }
    // 压缩图片 1 先获取图片的宽高 2 通过canvas.drawImage画图片然后再通过canoves.toDataUrl 转成base64
    compress(url) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = url;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, img.width, img.height);
            const base64 = canvas.toDataURL(this.options.file.type, this.options.querty);
            this.options.success(base64);
        };
    }
}
const file = document.querySelector("#bntIMg");
file.addEventListener("change", (e) => {
    var _a;
    const traget = e.target;
    const fileObj = (_a = traget.files) === null || _a === void 0 ? void 0 : _a[0];
    if (fileObj) {
        new CompressImg({
            file: fileObj, success: (base64) => {
                console.log(base64, '现在的file大小');
                document.body.innerHTML = ` <img src=${base64}>`;
            }
        });
    }
});
