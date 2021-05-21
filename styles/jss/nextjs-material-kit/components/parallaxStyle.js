const parallaxStyle = (theme) => ({
  parallax: {
    height: "90vh",
    maxHeight: "700px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "50px 0px 0px 0px",
    border: "0",
    display: "flex",
    alignItems: "top"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },

  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px",
    },
  },
});

export default parallaxStyle;
