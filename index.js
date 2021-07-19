function myFun(image, colour, head, logo){
    document.getElementById('myimage').src=image;
    document.querySelector('.empty').style.backgroundColor=colour;
    document.querySelector('button').style.backgroundColor=colour;
    document.getElementById('head').innerHTML=head;
    document.getElementById('logobg').src=logo;
}

const teams = [
    {
        id: 1,
        fullName: "Mumbai Indians",
        key: "MI",
        champioshipsWon: 5,
        teamIcon: "milogo.png",
        border: "#003a63",
        background: "linear-gradient(100deg,#005da0,#003a63)",
        top_bowler: "Jasprit Bumrah",
        top_batsman: "Kieron Pollard",
        team_icon: "Rohit Sharma"
    },
    {
        id: 2,
        fullName: "Chennai Super Kings",
        key: "CSK",
        champioshipsWon: 3,
        teamIcon: "csk-logo.png",
        border: "#f85c00",
        background: "linear-gradient(100deg,#fdb913,#f85c00)",
        top_bowler: "Deepak Chahar",
        top_batsman: "Ruturaj Gaikwad",
        team_icon: "Mahendra Singh Dhoni"
    },
    {
        id: 3,
        fullName: "Royal Challengers Banglore",
        key: "RCB",
        champioshipsWon: 0,
        teamIcon: "RCB logo.png",
        border: "#464646",
        background: "linear-gradient(100deg,#000,#464646)",
        top_bowler: "Yuzvendra Chahal",
        top_batsman: "AB de Villiers",
        team_icon: "Virat Kohli"
    },
    {
        id: 4,
        fullName: "Sunrisers Hyderabad",
        key: "SRH",
        champioshipsWon: 1,
        teamIcon: "srhlogo.png",
        border:"#b81c25",
        background: "linear-gradient( 100deg,#fb643e,#b81c25)",
        top_bowler: "Rashid Khan",
        top_batsman: "David Warner",
        team_icon: "Kane Williamson"
    },
    {
        id: 5,
        fullName: "Kolkata Knight Riders",
        key: "KKR",
        champioshipsWon: 2,
        teamIcon: "kkrlogo.png",
        border:"#3d2057",
        background: "linear-gradient(100deg,#70458f,#3d2057)",
        top_bowler: "Pat Cummins",
        top_batsman: "Shubman Gill",
        team_icon: "Dinesh Karthik"
    },
    {
        id: 6,
        fullName: "Punjab Kings",
        key: "PBKS",
        champioshipsWon: 0,
        teamIcon: "punjab-logo.png",
        border:"#740f0b",
        background: "linear-gradient(100deg,#aa4545,#740f0b)",
        top_bowler: "Murugan Ashwin",
        top_batsman: "Mayank Agarwal",
        team_icon: "KL Rahul"
    },
    {
        id: 7,
        fullName: "Delhi Capitals",
        key: "DC",
        champioshipsWon: 0,
        teamIcon: "dd-logo.png",
        border:"#0358a7",
        background: "linear-gradient(100deg,#004c93,#0358a7)",
        top_bowler: "Ravichandran Ashwin",
        top_batsman: "Steve Smith",
        team_icon: "Shikhar Dhawan"
    },
    {
        id: 8,
        fullName: "Rajasthan Royals",
        key: "RR",
        champioshipsWon: 1,
        teamIcon: "rrlogo.png",
        border:"#0358a7",
        background: "linear-gradient(100deg,#2d4d9d,#172e5e)",
        top_bowler: "Mustafizur Rahman",
        top_batsman: "Shivam Dube",
        team_icon: "Ben Stokes"
    }
]



