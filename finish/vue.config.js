const port=9999;
module.exports={
    lintOnSave:false,
    devServer: {
        port: port,
        open: true,
        overlay: {
          warnings: false,
          errors: true
        }
    }
}
