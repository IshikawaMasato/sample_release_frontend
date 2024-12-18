import { Box, Typography } from "@mui/material";

interface Props {
  topic: string | undefined;
  image: string | undefined;
}

export default function Title(props: Props) {
  return (
    <Box height={"30vh"} my={"55px"}>
      <Typography
        variant={"h4"}
        component={"h5"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        {props.topic}
      </Typography>
      <Box
        bgcolor={"gray"}
        mt={"2px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{
          height: "auto",
          width: "100%",
        }}
      >
        <Box
          component={"img"}
          width={"100%"}
          height={"auto"}
          src={props.image}
        ></Box>
      </Box>
    </Box>
  );
}
