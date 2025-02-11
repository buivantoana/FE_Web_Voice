import {
  Box,
  Button,
  Drawer,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { RiArrowDownSLine, RiHqLine, RiOpenaiFill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import profile from "../../images/alloy.svg";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InputSlider from "@/components/InputSlide";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import mp3 from "../../images/hello_toan.mp3";
import author from "../../images/user.png";

import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import Author from "@/components/Author";
type Props = {
  textVoice: string;
  setTextVoice: any;
};

const VocalizeView = ({ textVoice, setTextVoice }: Props) => {
  const theme: any = useTheme();

  const [anchorElQuality, setAnchorElQuality] = useState(null);
  const handleClickQuality = (event: any) => {
    setAnchorElQuality(event.currentTarget);
  };
  const handleCloseQuality = () => {
    setAnchorElQuality(null);
  };
  const openQuality = Boolean(anchorElQuality);
  const idQuality = openQuality ? "simple-popover" : undefined;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: any) => () => {
    setIsOpen(open);
  };
  return (
    <Box p={"20px"}>
      <Stack direction={"row"} justifyContent={"space-between"} gap={"20px"}>
        <Box
          position={"relative"}
          bgcolor={"white"}
          height={"75vh"}
          width={"49%"}
          border={"1px solid #dddddd"}
          borderRadius={"8px"}>
          <Box sx={{ borderBottom: "1px solid rgb(226 232 240)" }}>
            <Stack direction={"row"} padding={"0 20px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                padding={"9px 0"}
                sx={{ borderBottom: `3px solid ${theme.palette.active.main}` }}>
                <svg
                  data-v-fa4d36aa=''
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  aria-hidden='true'
                  role='img'
                  className='icon flex-shrink-0 w-5 h-5 relative text-gray-700 dark:text-gray-200'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z'
                  />
                </svg>

                <Typography fontSize={".9rem"} fontWeight={"500"}>
                  Input Text
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box
            width={"100%"}
            height={"100%"}
            sx={{
              ".css-lh8pzc-MuiInputBase-root-MuiOutlinedInput-root": {
                height: "83%",
                border: "none",
              },
              ".css-15oluye-MuiFormControl-root-MuiTextField-root": {
                height: "90%",
              },
            }}
            boxSizing={"border-box"}>
            <TextField
              placeholder='Nhập văn bản bạn muốn chuyển đổi thành tiếng nói ở đây...'
              multiline
              value={textVoice}
              onChange={(e) => {
                setTextVoice(e.target.value);
              }}
              fullWidth
              rows={4} // Số dòng hiển thị
              variant='standard' // Loại bỏ border mặc định
              InputProps={{
                disableUnderline: true, // Bỏ underline của variant="standard"
                sx: {
                  backgroundColor: "white", // Nền trắng
                  borderRadius: 2, // Đặt border-radius nếu cần
                  padding: 1, // Khoảng cách padding
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  height: "auto", // Cài đặt chiều cao tự động
                  minHeight: "100px", // Đặt chiều cao tối thiểu nếu cần
                  resize: "none", // Bỏ resize của textarea
                  overflow: "auto", // Để có thể cuộn
                  scrollbarWidth: "none", // Ẩn thanh cuộn cho Firefox
                  msOverflowStyle: "none", // Ẩn thanh cuộn cho Internet Explorer và Edge
                },
                "& .MuiFormControl-root": {
                  minHeight: "100px", // Đặt chiều cao tối thiểu cho TextField
                },
                // Ẩn thanh cuộn trong các trình duyệt WebKit
                "&::-webkit-scrollbar": {
                  display: "none", // Ẩn thanh cuộn
                },
              }}
            />
          </Box>
          {textVoice.length > 0 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                display: "flex",
                gap: "15px",
                cursor: "pointer",
              }}>
              <Typography>{textVoice.length}/3000</Typography>
              <Box onClick={() => setTextVoice("")}>
                <Typography color='red'>Xóa văn bản</Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box height={"67vh"} width={"49%"}>
          <Author />
          <Box
            mt={"10px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            height={"45px"}>
            <Box
              height={"100%"}
              width={"31%"}
              border={"2px solid #dddddd"}
              sx={{
                borderTopLeftRadius: "25px",
                borderBottomLeftRadius: "25px",
                ".css-918vr5-MuiStack-root": {
                  transform: "rotate(180deg)",
                },
                ".css-lp854l-MuiFormControl-root-MuiTextField-root input[type=number]":
                  {
                    padding: "0 10px",
                  },
                ".css-lp854l-MuiFormControl-root-MuiTextField-root": {
                  width: "45px",
                },
              }}>
              <InputSlider label={true} />
            </Box>
            <Box
              width={"31%"}
              height={"100%"}
              sx={{ border: "2px solid #dddddd" }}>
              <Box
                sx={{
                  "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-kvalmi-MuiPaper-root-MuiPopover-paper":
                    {
                      padding: "5px",
                    },
                  height: "100%",
                }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                  aria-describedby={idQuality}
                  onClick={handleClickQuality}>
                  <RiHqLine size={20} />
                  <Typography fontSize={"1.2rem"}>Chất lượng cao</Typography>
                  <RiArrowDownSLine size={20} />
                </Box>

                <Popover
                  id={idQuality}
                  open={openQuality}
                  anchorEl={anchorElQuality}
                  onClose={handleCloseQuality}
                  sx={{ p: "5px" }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}>
                  <Typography sx={{ padding: "10px 8px", width: "180px" }}>
                    Chất lượng cao
                  </Typography>
                  <Typography sx={{ padding: "10px 8px", width: "180px" }}>
                    Chất lượng HD
                  </Typography>
                </Popover>
              </Box>
            </Box>
            <Box
              onClick={toggleDrawer(true)}
              width={"31%"}
              border={"2px solid #dddddd"}
              bgcolor={theme.palette.active.main}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"20%"}
              height={"100%"}
              sx={{
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                ".css-918vr5-MuiStack-root": {
                  transform: "rotate(180deg)",
                },
                ".css-lp854l-MuiFormControl-root-MuiTextField-root input[type=number]":
                  {
                    padding: "0 10px",
                  },
                ".css-lp854l-MuiFormControl-root-MuiTextField-root": {
                  width: "45px",
                },
              }}>
              <Typography fontSize={"1.2rem"} fontWeight={"bold"} color='white'>
                Tạo tiếng nói
              </Typography>
              <Box>
                <svg
                  data-v-fa4d36aa=''
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  aria-hidden='true'
                  role='img'
                  className='icon flex-shrink-0 w-14 h-14 md:w-6 md:h-6'
                  width='1em'
                  style={{ color: "white", fontSize: "30px", marginTop: "5px" }}
                  height='1em'
                  viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M4.929 19.071A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10H2zM11 6v12h2V6zM7 9v6h2V9zm8 0v6h2V9z'
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Drawer
        anchor='bottom' // Đảm bảo anchor là "right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "auto",
            padding: 0,
          },
        }}>
        <Box
          sx={{
            width: "60%",
            p: 2,
            cursor: "pointer",
            mx: "auto",
            background: "white",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            position: "relative",
          }}
          role='presentation'>
          <Box
            sx={{
              border: "1px solid #dddddd",
              borderRadius: "50%",
              width: "100px",
              p: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: "15px",
              top: "15px",
              background: "white",
            }}>
            <img
              src={author}
              width={90}
              style={{ borderRadius: "50%" }}
              alt=''
            />
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box
              width={"50px"}
              height={"5px"}
              borderRadius={"25px"}
              bgcolor={"#dddddd"}></Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"15px"}
            width={"100%"}
            paddingBottom={"15px"}
            borderBottom={"2px solid #dddddd"}>
            <SmartDisplayIcon />
            <Typography fontWeight={"500"}>Audio Player</Typography>
          </Box>
          <Box mt={"30px"} width={"calc(100%-20px)"} px={"10px"}>
            <Typography variant='h5' mb={"20px"} fontWeight={"500"}>
              {" "}
              Allow
            </Typography>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Box width={"98%"}>
                <AudioPlayer width={"98%"} />
              </Box>
              <Box>
                <FileDownloadIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default VocalizeView;

function AudioPlayer({ width }: any) {
  return (
    <Box>
      <audio style={{ width: width }} controls>
        <source src={mp3} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
}
