const basename = `${process.env.SUBDIRECTORY}`;
const publicPathUrl = `${process.env.PUBLIC_URL}`;
const publicPathUrlLocalServer = `${process.env.PUBLIC_URL_LOCALSERVER}`;
const localserver = `${process.env.LOCALSERVER}`;

export const paths = () => {

    let publicPath, folder, srcImage;

    if(basename === '/'){
        folder= localserver === 'f' ? '/' : '/demos-react/client-side-route/';
        publicPath = localserver === 'f' ? 'http://localhost:8080' : `${publicPathUrlLocalServer}`;
        srcImage = `${publicPath}/dist/assets/Male_2_Circle_Orange.png`;
    }else{
        folder = `${process.env.SUBDIRECTORY}`;
        srcImage = `${process.env.SUBDIRECTORY}/dist/assets/Male_2_Circle_Orange.png`;
        publicPath = publicPathUrl;
    }

   return {
       folder: folder,
       srcImage: srcImage,
       publicPath: publicPath
   }


}
