import { Avatar, Switch, Checkbox, Radio, TextField } from "@mui/material";
import { orange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Personal = () => {
  return (
    <div className="mt-5 grid grid-cols-5 gap-5">
      <div className="col-span-3 rounded-[16px] bg-white ">
        <div className="flex items-center gap-3 p-4">
          <Avatar
            alt="Jayvion Simon"
            src="https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg"
            variant="dot"
          />
          <div>
            <h4 className="font-semibold">Jayvion Simon</h4>
            <p className="text-[12px] text-[#637381]">
              California, United States
            </p>
          </div>
        </div>
        <img
          src="https://zone-ui.vercel.app/assets/images/cover/cover_12.jpg"
          alt="image"
          className="rounded-xl object-cover px-2"
        />
        <div className="px-4 pb-2 pt-4">
          <p className="text-[#637381 ]">
            Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <FavoriteIcon sx={{ padding: "4px", borderRadius: "50%" }} />
            <div className="flex items-center gap-2">
              <ShareOutlinedIcon sx={{ padding: "4px" }} />
              <SmsRoundedIcon sx={{ padding: "4px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start gap-5">
        <Switch defaultChecked color="warning" />
        <label className="cursor-pointer space-x-2 text-[18px]">
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 24 },
              color: orange[600],
              "&.Mui-checked": {
                color: orange[500],
              },
            }}
          />
          Checkbox
        </label>
        <label className="cursor-pointer space-x-2 text-[18px]">
          <Radio name="radio-buttons" />
          Radio Button
        </label>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          select
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
          required
          id="filled-required"
          label="Category"
          defaultValue="Clothes"
          sw={{ width: "100%" }}
        >
          <option>Clothes</option>
          <option>FootWear</option>
          <option>Jean</option>
        </TextField>
      </div>
    </div>
  );
};

export default Personal;
