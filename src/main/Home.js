// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import img from './image.png';
// import './main.css'; // Import CSS file for styling

// export default function Home() {
//   return (
//     <div className="bg1">
//       {/* <Card className="custom-card">
//         <CardActionArea>
//           <div className="card-image-container">
//             <img src={img} alt="profile" className="card-image" />
//           </div>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Mahesh
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               He is the actor in Telugu Film Industry. Mahesh Babu, he consistently remains one of the top contenders due to his successful films, widespread popularity, and significant impact on Telugu cinema.
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card> */}
      
//       <div class="content">
//             <h1>Heroes & <br/><span>Movies</span> <br/>Blog</h1>
//             <p class="par">This is Devoloped on purpose of posting blog on hero and as well as Movies  <br/>  This is Developed by Author Ganesh 
//             <br/> Pls be friendly and be polite regarding us and contact us for any thing by contact page!!! </p>

//                 <button class="cn"><a href="/registration">JOIN US</a></button>
//                 </div>

//     </div>
//   );
// }

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import img from './img.png';
import './main.css'; // Import CSS file for styling



export default function Home() {
  return (
    <div className="bg1">
      {/* <Card className="custom-card">
        <CardActionArea>
          <div className="card-image-container">
            <img src={img} alt="profile" className="card-image" />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mahesh
            </Typography>
            <Typography variant="body2" color="text.secondary">
              He is the actor in Telugu Film Industry. Mahesh Babu, he consistently remains one of the top contenders due to his successful films, widespread popularity, and significant impact on Telugu cinema.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
      
      <div className="content">
        <h1>Heroes & <br/><span>Movies</span> <br/>Blog</h1>
        <p className="par">
          This is Devoloped on purpose of posting blog on hero and as well as Movies 
          <br/> This is Developed by Author Ganesh 
          <br/> Pls be friendly and be polite regarding us and contact us for any thing by contact page!!! 
        </p>

        <button className="cn"><a href="/registration">JOIN US</a></button>
      </div>
      
    </div>
  );
}
