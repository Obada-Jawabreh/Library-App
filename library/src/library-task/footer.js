


export default function Footer(){
    let style={
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
            padding: "10px 20px",
            // position: "relative",
            bottom: "0",
            width: "100%",
            marginTop: "60px"
          
          
    }
    return (
        <footer style={style} className="footer">
          <p>&copy; 2024 مكتبة الكتب. جميع الحقوق محفوظة.</p>
        </footer>
      );
}