import Typography from "@mui/material/Typography";
import { Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MuiTypo = () => {
  return (
    <div>
      <Typography variant="h1">heloo h1</Typography>
      <Typography variant="h2">byjel</Typography>
      <Typography variant="subtitle1" gutterBottom>
        hello
      </Typography>
      <Typography variant="h4"></Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi
        natus quibusdam inventore laudantium ipsam dicta ad labore adipisci,
        molestiae quia modi fugiat tempore dolores sapiente dolorum officiis
        corrupti facere.
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>
      <Stack display="block" spacing={10} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Small
        </Button>
        <Button variant="contained" startIcon={<SendIcon />} size="large">
          Small
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} size="large">
          Small
        </Button>
      </Stack>
    </div>
  );
};

export default MuiTypo;
