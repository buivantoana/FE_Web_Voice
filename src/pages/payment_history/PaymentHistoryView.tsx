import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import HelpIcon from "@mui/icons-material/Help";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import {
  Box,
  Button,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import user from "../../images/user.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { RiPaypalFill } from "react-icons/ri";
type Props = {};

const PaymentHistoryView = (props: Props) => {
  const theme: any = useTheme();
  return (
    <Box padding={"2% 10%"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box sx={{ width: "33%", p: 2, cursor: "pointer" }}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"8px"}
            flexDirection={"column"}>
            <img
              src={user}
              style={{ borderRadius: "50%" }}
              width={100}
              alt=''
            />
            <Typography variant='h4' fontWeight={"500"}>
              Bui Toan
            </Typography>
            <Typography color='grey_500.main'>toanbui219@gmail.com</Typography>
          </Box>
          <Box
            mt={"20px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box
              gap={"10px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <CheckCircleOutlineIcon />
              <Typography>Kế hoạch hiện tại</Typography>
            </Box>
            <Box padding={"2px 8px"} borderRadius={"25px"} bgcolor={"#fdf6b2"}>
              <Typography fontWeight={"500"}>Miễn phí</Typography>
            </Box>
          </Box>
          <Box
            mt={"10px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box
              gap={"10px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <StarOutlineOutlinedIcon />

              <Typography>Tín dụng có sẵn</Typography>
            </Box>
            <Box
              padding={"3px 10px"}
              borderRadius={"50%"}
              bgcolor={"rgb(225 239 254)"}>
              <Typography fontWeight={"500"}>0</Typography>
            </Box>
          </Box>
          <Box
            mt={"10px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box
              gap={"10px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <LockClockOutlinedIcon />

              <Typography>Tín dụng bị khóa</Typography>
              <WhiteTooltip
                title='Chúng tôi khóa tín dụng của bạn để thực hiện công việc bạn yêu cầu. Nếu công việc thất bại hoặc bị hủy, số tín dụng sẽ được trả lại vào tài khoản của bạn.'
                placement='top'>
                <HelpIcon fontSize='small' />
              </WhiteTooltip>
            </Box>
            <Box
              padding={"3px 10px"}
              borderRadius={"50%"}
              bgcolor={"rgb(252 232 243)"}>
              <Typography fontWeight={"500"}>0</Typography>
            </Box>
          </Box>
          <Box
            mt={"40px"}
            border={"1px solid #dddddd"}
            borderRadius={"10px"}
            p={"10px 15px"}
            sx={{
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
              "&:hover": {
                backgroundColor: "grey_700.main", // Background on hover
                color: "active.main", // Text and icon color on hover
              },
              "&:hover .MuiSvgIcon-root": {
                color: "active.main", // Icon color on hover
              },
            }}
            width={"calc(100%-30px)"}>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <AddShoppingCartIcon />
              <Typography> Mua tín dụng</Typography>
            </Box>
          </Box>
          <Box
            mt={"20px"}
            border={"1px solid #dddddd"}
            borderRadius={"10px"}
            p={"10px 15px"}
            sx={{
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
              "&:hover": {
                backgroundColor: "grey_700.main", // Background on hover
                color: "active.main", // Text and icon color on hover
              },
              "&:hover .MuiSvgIcon-root": {
                color: "active.main", // Icon color on hover
              },
            }}
            width={"calc(100%-30px)"}>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <DescriptionIcon />
              <Typography> Lịch sử thanh toán</Typography>
            </Box>
          </Box>
          <Box
            mt={"20px"}
            border={"1px solid #dddddd"}
            borderRadius={"10px"}
            p={"10px 15px"}
            sx={{
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
              "&:hover": {
                backgroundColor: "grey_700.main", // Background on hover
                color: "active.main", // Text and icon color on hover
              },
              "&:hover .MuiSvgIcon-root": {
                color: "active.main", // Icon color on hover
              },
            }}
            width={"calc(100%-30px)"}>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <ContactMailIcon />
              <Typography> Thông tin tài khoản</Typography>
            </Box>
          </Box>
          <Box
            mt={"20px"}
            border={"1px solid #dddddd"}
            borderRadius={"10px"}
            p={"10px 15px"}
            sx={{
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
              "&:hover": {
                backgroundColor: "grey_700.main", // Background on hover
                color: "active.main", // Text and icon color on hover
              },
              "&:hover .MuiSvgIcon-root": {
                color: "active.main", // Icon color on hover
              },
            }}
            width={"calc(100%-30px)"}>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <LogoutIcon />
              <Typography>Đăng xuất </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ position: "relative" }}
          bgcolor={"white"}
          padding={"10px"}
          minHeight={"80vh"}
          border={"1px solid #dddddd"}
          p={"20px"}
          width={"62%"}>
          <Box borderBottom={"1px solid #dddddd"} pb={"20px"}>
            <Typography variant='h6' fontWeight={"500"}>
              Lịch sử thanh toán
            </Typography>
          </Box>
          <Box
            mt={"20px"}
            sx={{
              ".css-1be8zi3-MuiTypography-root-MuiTimelineContent-root": {
                padding: 0,
              },
            }}>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}>
              <TimelineItem>
                <TimelineSeparator>
                  <HighlightOffIcon />
                  <TimelineConnector sx={{ minHeight: "40px" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    padding={"0px 20px 30px"}
                    justifyContent={"space-between"}>
                    <Box>
                      <Box display={"flex"} alignItems={"end"} gap={"10px"}>
                        <Typography variant='h5'>200K tín dụng</Typography>
                        <Button
                          sx={{
                            borderRadius: "5px",
                            padding: "2px 0px",
                            backgroundColor: "rgb(254 236 220)", // Màu nền của nút
                            color: "rgb(138 44 13)", // Màu chữ
                            "&:hover": {
                              backgroundColor: "rgb(254 236 220)", // Màu nền khi hover
                            },
                          }}
                          variant='contained'>
                          Mua tín dụng
                        </Button>
                        <Button
                          sx={{
                            borderRadius: "5px",
                            padding: "2px 5px",
                            backgroundColor: theme.palette.grey_700.main, // Màu nền của nút
                            color: "black", // Màu chữ
                            "&:hover": {
                              backgroundColor: theme.palette.grey_700.main, // Màu nền khi hover
                            },
                          }}
                          variant='contained'>
                          Hủy bỏ
                        </Button>
                      </Box>
                      <Typography fontSize={".8rem"} color='grey_500.main'>
                        2024-10-24 23:15:02
                      </Typography>
                      <Typography fontSize={".9rem"} color='grey_500.main'>
                        Order ID: 1db0f73e-9223-11ef-b28d-be6d42b1dbef
                      </Typography>
                      <Typography
                        fontSize={".9rem"}
                        sx={{ display: "flex", alignItems: "center" }}
                        color='grey_500.main'>
                        <RiPaypalFill /> Paypal ID:
                        1db0f73e-9223-11ef-b28d-be6d42b1dbef
                      </Typography>
                    </Box>
                    <Typography variant='h5' color='grey_500.main'>
                      8$
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <HighlightOffIcon />
                  <TimelineConnector sx={{ minHeight: "40px" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    padding={"0px 20px 30px"}
                    justifyContent={"space-between"}>
                    <Box>
                      <Box display={"flex"} alignItems={"end"} gap={"10px"}>
                        <Typography variant='h5'>200K tín dụng</Typography>
                        <Button
                          sx={{
                            borderRadius: "5px",
                            padding: "2px 0px",
                            backgroundColor: "rgb(254 236 220)", // Màu nền của nút
                            color: "rgb(138 44 13)", // Màu chữ
                            "&:hover": {
                              backgroundColor: "rgb(254 236 220)", // Màu nền khi hover
                            },
                          }}
                          variant='contained'>
                          Mua tín dụng
                        </Button>
                        <Button
                          sx={{
                            borderRadius: "5px",
                            padding: "2px 5px",
                            backgroundColor: theme.palette.grey_700.main, // Màu nền của nút
                            color: "black", // Màu chữ
                            "&:hover": {
                              backgroundColor: theme.palette.grey_700.main, // Màu nền khi hover
                            },
                          }}
                          variant='contained'>
                          Hủy bỏ
                        </Button>
                      </Box>
                      <Typography fontSize={".8rem"} color='grey_500.main'>
                        2024-10-24 23:15:02
                      </Typography>
                      <Typography fontSize={".9rem"} color='grey_500.main'>
                        Order ID: 1db0f73e-9223-11ef-b28d-be6d42b1dbef
                      </Typography>
                      <Typography
                        fontSize={".9rem"}
                        sx={{ display: "flex", alignItems: "center" }}
                        color='grey_500.main'>
                        <RiPaypalFill /> Paypal ID:
                        1db0f73e-9223-11ef-b28d-be6d42b1dbef
                      </Typography>
                    </Box>
                    <Typography variant='h5' color='grey_500.main'>
                      8$
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentHistoryView;
const WhiteTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "white", // Set background to white
    color: "black", // Set text color to black for contrast
    border: "1px solid #ddd", // Optional border
    fontSize: "0.875rem", // Adjust font size if needed
  },
});
