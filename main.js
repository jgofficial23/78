var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = names.length;
    if (i >= numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

function addNew() {
    
    numbers_of_family_member_in_array = names.length;
   
    images.push("https://st.depositphotos.com/1526816/1883/v/950/depositphotos_18832631-stock-illustration-a-young-boy-thinking.jpg");
    
    names.push("Bajan Singh");
    
    console.log(names);
    window.alert("New Member Added")
}

function Remove() {
    numbers_of_family_member_in_array = names.length;

    images.pop("https://st.depositphotos.com/1526816/1883/v/950/depositphotos_18832631-stock-illustration-a-young-boy-thinking.jpg");
    
    names.pop("Bajan Singh");
    
    console.log(names);
    window.alert("Member Removed")
}