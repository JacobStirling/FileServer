Things I Had to Do:
- Follow React/Grails config steps to get npm, babel, webpack, React, etc. installed  
- Remember 'babel-loader' instead of 'babel' in webpack.config.js  
- Use npm to install Dropzone  
- Implement Base64 encoding on client side  
- Use fetch to send encoded data as the body of a POST call  
- Inject Dropzone React element into Grails view (same steps as React tutorial, but this time I just added a div element to the default Grails index.gsp file)  
- Implement a Grails controller to receive the uploaded file  
- Configured Grails max upload file size to 10mb in application.yml  
- Controller expects only image files right now.  
- It decodes the base64 back into a byte array, which can be reconstructed into an image by the ImageIO class. Find a similar class for your favourite file format.  
- Save the image file in the file system the same way you would in a normal Java program.  
- Create an instance of a domain object to store the metadata, basically to create a database table of filenames so that they can be easily found using domain object queries (e.g. Document.find)  

If you want to integrate this into an existing Grails/React project, the only things you will need to reconfigure are the max upload size in application.yml and use npm to install the Dropzone React element.

For the first step, add the following to  ./conf/application.yml under grails:controllers

upload:   maxFileSize: 10000000   maxRequestSize: 10000000

This sets the max upload size to 10mb. Adjust accordingly. I had no trouble uploading images up to 4mb in size. 

The second step is easy. Just call
npm install --save react-dropzone
from the project root directory and it'll set everything up for you.
Then in a js file, you can import it using 

import Dropzone from 'react-dropzone';

and you can use it just like any other React component. 

***tl;dr clone the project and everything should just work.***
