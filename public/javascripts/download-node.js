/**
 * Created by basaltan9999 on 2016/01/11.
 */

// DL
download (
    'http://www.aozora.gr.jp/index_pages/person81.html',
    'miyazawakenji.html',
    function(){console.log('ok, kenji');}
);

download (
    'http://www.aozora.gr.jp/index_pages/person148.html',
    'natumesoseki.html',
    function(){console.log('ok natsume');}
);


// urlに有るファイルをPathへ保存
function download(url,savepath,callback){
    var http = require('http'); // HTTPモジュール
    var fs  = require('fs') ; // ファイル関連モジュール
    // 出力先
    var outfile = fs.createWriteStream(savepath);

    var req = http.get(url ,function(res){
        res.pipe(outfile);
        res.on('end',function(){
            outfile.close();
            callback();
        });
    });
}
