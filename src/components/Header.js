import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Header () {
    return (
        <div className="header">
            <h1><span className="logo"><WbSunnyIcon  sx={{ fontSize: "3rem" }} /> </span>Weather Forecast</h1>
        </div>
    )
}