import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox ({info}) {

    let RAIN_URL = "https://media.istockphoto.com/id/1322531760/photo/city-and-clouds.jpg?s=1024x1024&w=is&k=20&c=vhUaQTKog3Zi_kGkmLYTex8-DEgjDjorrmZYEKYEZZ4=";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://media.istockphoto.com/id/1347559775/photo/aerial-view-of-the-city-of-london-a-historic-financial-district-home-to-both-the-stock.jpg?s=1024x1024&w=is&k=20&c=BfJTeTq5I8W3sCX6G4kWUWca1btZrtCTduIwDfDAQVg=";
    return(
        <div className="infoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                            ? RAIN_URL
                            : info.temp >20
                            ? HOT_URL
                            :COLD_URL
                        }
                        title="city img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p> Humidity: {info.humidity} </p>
                        <p> Temperature: {info.temp}&deg;C</p>
                        <p> Maximum Temperature: {info.tempMax}&deg;C</p>
                        <p> Minimum Temperature: {info.tempMin}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}