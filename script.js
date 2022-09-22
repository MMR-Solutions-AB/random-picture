const getPic = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const imgURI = data.message;
    const image = document.getElementById("img").setAttribute("src", imgURI);
  };
  
  const button = document.getElementById("pic-btn");
  
  /* Click Event i första argumentet och funktionen i andra argumentet */
  button.addEventListener("click", getPic);
  
  