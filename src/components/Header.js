import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Header () {
    return (
        <div className="header">
            <h1><WbSunnyIcon sx={{ fontSize: "3rem" }} /> Weather Forecast</h1>
        </div>
    )
}