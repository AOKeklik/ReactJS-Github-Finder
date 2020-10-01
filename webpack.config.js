const path = require('path');//path MODULU ILE DIZIN ISLEMLERIMIZ GERCEKLESTIRIRIZ

module.exports = {
    entry: './src/index.js',//GIRIS DOSYASINI BELIRTTIK
    output: {//GIRIS DOSYASINI DISARIYA AKTARIRIZ
        path: path.resolve(__dirname, 'dist'),//dirname ILE webconfig DOSYASININ DIZININI ALIRZ
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),//HANGI DOSYANIN TARANACAGINI BELIRTTK
        historyApiFallback: true //route KULLANIRKEN SAYFALAR ARASNDA DGEZERKEN SADECE index SAYFASINI DONDURUR
    },
    module: {// babel ISLEMLERI ICIN KURALLAR BELIRLEDIK
        rules: [
            {
                test: /\.js$/,              //js UZANTILI HER DOSYAYA BAKACAK
                loader: 'babel-loader',     //load ETSIN
                exclude: /node_modules/     //ILGILI KLASORE BAKMASIN
            },
            {
                test: /\.scss$/,            // TUM scss VEYA ISTERSEK css DOSYALARINI TARA
                use: ['style-loader','css-loader','sass-loader'] // BIRDEN COK loader ICIN DIZI TANIMLADIK
            },
            {
                test: /\.(png|jpe?g|gif)$/i, // RESIM DOSYALARINI KULLANMAK ICIN 
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    }       
}