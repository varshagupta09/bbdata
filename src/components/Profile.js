import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Params,
} from "react-router-dom";

const Profile = (props) => {
  const params = useParams();

  const AcotorsData = [
    {
      id: "1",
      Name: "Amitabh Bachchan",
      img: "https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg",
      About:
        "Amitabh Bachchan is an Indian actor who works in Hindi cinema. With a cinematic career spanning over five decades, he has played pivotal roles in over 200 films ",
    },
    {
      id: "2",
      Name: "Shah Rukh Khan",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
      About:
"Shah Rukh Khan (pronounced [ˈʃɑːɦɾʊx xɑːn] ⓘ; born 2 November 1965), also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films.  he has appeared in more than 100 films, and earned numerous accolades, including 14 Filmfare Awards. He has been awarded the Padma Shri by the Government of India, as well as the Order of Arts and Letters and Legion of Honour by the Government of France. Khan has a significant following in Asia and the Indian diaspora worldwide. In terms of audience size and income, several media outlets have described him as one of the most successful film stars in the world.[b] Many of his films thematise Indian national identity and connections with diaspora communities, or gender, racial, social and religious differences and grievances."    },
    {
      id: "3",
      Name: "Salman Khan",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2021/05/Salman-Khan-helps-18-year-old-boy-from-Karnataka-with-ration-and-educational-equipment-after-his-father-succumbs-to-COVID-19.jpg",
      About:
"Abdul Rashid Salim Salman Khan (pronounced [səlˈmɑːn xɑːn]; born 27 December 1965)[3] is an Indian actor, film producer, and television personality who works predominantly in Hindi films. In a career spanning over three decades, Khan has received numerous awards, including two National Film Awards as a film producer, and two Filmfare Awards as an actor.[4] He is cited in the media as one of the most commercially successful actors of Indian cinema.[5][6] Forbes has included Khan in listings of the highest-paid celebrities in the world, in 2015 and 2018, with him being the highest-ranked Indian in the latter year.[7][8][9][10] Khan has starred in the annual highest-grossing Hindi film of 10 individual years, the highest for any actor"    },
    {
      id: "4",
      Name: "Akshay Kumar",
      img: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_FMjpg_UX1000_.jpg",
      About:
"Akshay Hari Om Bhatia[1] (born Rajiv Hari Om Bhatia; 9 September 1967[2]), known professionally as Akshay Kumar (pronounced [əkˈʂəj kʊˈmɑːɾ]), is an Indian actor and film producer working in Hindi cinema. Referred to in the media as Khiladi Kumar,[3][4] through his career spanning over 30 years, Kumar has appeared in over 100 films and has won several awards, including one National Film Award and two Filmfare Awards. He received the Padma Shri, India's fourth-highest civilian honour, from the Government of India in 2009. Kumar is one of the most prolific actors in Indian cinema.[5][6] Forbes included Kumar in their lists of both highest-paid celebrities and highest-paid actors in the world from 2015 to 2020.[7][8] Between 2019 and 2020, he was the only Canadian on both lists."    },
    {
      id: "5",
      Name: "Aamir Khan",
      img: "https://preview.redd.it/g8se27fn5ymc1.png?width=640&crop=smart&auto=webp&s=f64226e65bfdcc0693c7cd72d6d83c501aceeaa9",
      About:
"Mohammed Aamir Hussain Khan; born 14 March 1965) is an Indian actor, filmmaker, and television personality who works in Hindi films. Referred to in the media as , he is known for his work in a variety of film genres, particularly in films which raise social issues like education and gender equality, or which have a positive impact on society in India or abroad.[1][2][3][4] Through his career spanning over 30 years, Khan has established himself as one of the most notable actors of Indian cinema.[5][6] Khan is the recipient of numerous awards, including nine Filmfare Awards, four National Film Awards, and an AACTA Award. He was honoured by the Government of India with the Padma Shri in 2003 and the Padma Bhushan in 2010,[7] and received an honorary title from the Government of China in 2017.[8]"    },
    {
      id: "6",
      Name: "Hrithik Roshan",
      img: "https://static.india.com/wp-content/uploads/2024/01/hrithikroshan1.jpg?impolicy=Medium_Widthonly&w=400&h=800",
      About:
"Hrithik Roshan (pronounced [ɾɪt̪ɪk ɾoʃən];[1] born 10 January 1974) is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, including six Filmfare Awards, of which four were for Best Actor. Starting from 2012, he has appeared in Forbes India's Celebrity 100 several times based on his income and popularity."    },
    {
      id: "7",
      Name: "Ranbir Kapoor",
img:"https://img.etimg.com/thumb/width-1200,height-1200,imgsize-31028,resizemode-75,msid-104702890/magazines/panache/ranbir-kapoor-hits-back-at-naysayers-claims-bad-boy-image-is-a-product-of-his-on-screen-persona.jpg",      About:
"Ranbir Kapoor (pronounced [ɾəɳˈbiːɾ kəˈpuːɾ], born 28 September 1982) is an Indian actor known for his work in Hindi-language films. He is one of the highest-paid actors of Hindi cinema and has featured in Forbes India's Celebrity 100 list since 2012. Kapoor is the recipient of several awards, including seven Filmfare Awards. The son of actors Rishi Kapoor and Neetu Singh, and the grandson of actor-director Raj Kapoor, Kapoor pursued filmmaking and method acting at the School of Visual Arts and the Lee Strasberg Theatre and Film Institute, respectively. He subsequently assisted Sanjay Leela Bhansali on the film Black (2005) and made his acting debut with Bhansali's tragic romance Saawariya (2007), a critical and commercial failure. He rose to prominence with the coming-of-age film Wake Up Sid, the romantic comedy Ajab Prem Ki Ghazab Kahani (both 2009), and the political drama Raajneeti (2010)." },
    {
      id: "8",
      Name: "Ranveer Singh",
img:"https://upload.wikimedia.org/wikipedia/commons/3/32/Ranveer_Singh_in_2023_%281%29_%28cropped%29.jpg",  About:
"Ranveer Singh Bhavnani (pronounced [rəɳˈʋiːr sɪŋ]; born 6 July 1985) is an Indian actor who works in Hindi films. He is the recipient of several awards, including five Filmfare Awards. He is among the highest-paid Indian actors and has been featured in Forbes India's Celebrity 100 list since 2012."    },
    {
      id: "9",
      Name: "Ajay Devgn",
      img: "https://static.abplive.com/wp-content/uploads/2015/10/31070156/ajay-devgn-looks.jpg?impolicy=abp_cdn&imwidth=650",
      About:
        "Vishal Veeru Devgan (born 2 April 1969), known professionally as Ajay Devgn, is an Indian actor, film director, and producer who works primarily in Hindi cinema. A leading actor of Hindi cinema, Devgn has appeared in over 100 films and has won numerous accolades, including four National Film Awards and four Filmfare Awards. In 2016, he was honoured by the Government of India with the Padma Shri, the country's fourth-highest civilian honour.",
    },
    {
      id: "10",
      Name: "Sidharth Malhotra",
      img: "https://im.idiva.com/content/2022/Apr/sid1_626a42861ebcd.jpg?w=720&h=1280&cc=1",
      About:
        "Sidharth Malhotra ([sɪˈd̪ʱːaːrt̪ʰ məlˈɦoːt̪raː]; born 16 January 1985)[1][2] is an Indian actor who works in Hindi films. He began his career as a fashion model, but left it to pursue acting as an assistant director to Karan Johar in My Name Is Khan (2010). He had his first lead role in Johar's teen film Student of the Year (2012)",
    },
  ];

  const [data, setData] = useState([]);

  const displayData = (dataaa) => {
    // console.log("displayData function ");
    // const newData = AcotorsData.filter((curElement) => {
    //   console.log(curElement.id == id);
    // });
    setData([{ ...dataaa }]);
  };
  return (
    <>
      {/* <div>
        {AcotorsData.map((curElem) => {
          return (
            <>
              <div>
                <div className="justify-center flex h-96 pt-10 ">
                  <aside className="sticky sm:absolute bg-gray-600  sm:w-64 h-screen pt-10 pl-10">
                    <ul>
                        <button className="py-4 px-4"
                          to="/profile/Amitabh-Bachchan"
                          onClick={() => detailPage(curElem)}
                        >
                          Amitabh Bachchan
                        </button>
                   
               
                        <button className="py-4 px-4"
                          to="/profile/Shahrukh-Khan"
                          onClick={() => detailPage(curElem)}
                        >
                          Shahrukh Khan
                        </button>
                  
                      <button className="py-4 px-4" onClick={() => detailPage(curElem)}>
                        Salman Khan
                      </button>

                    
                   
                    </ul>
                  </aside>
                </div>
              </div>
              <button onClick={() => detailPage(curElem)}>click</button>

              <aside className="sticky sm:absolute bg-gray-600  sm:w-64 h-screen pt-10 pl-10">
                <ul className="text-white font-medium ">
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Amitabh-Bachchan"
                      onClick={() => detailPage(curElem)}
                    >
                      Amitabh Bachchan
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Shahrukh-Khan"
                      onClick={() => detailPage(curElem)}
                    >
                      Shahrukh Khan
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Salman-Khan"
                      onClick={() => detailPage(curElem)}
                    >
                      Salman Khan
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Aamir-Khan"
                      onClick={() => detailPage(curElem)}
                    >
                      Aamir Khan
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Akshay-Kumar"
                      onClick={() => detailPage(curElem)}
                    >
                      Akshay Kumar
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Hrithik-Roshan"
                      onClick={() => detailPage(curElem)}
                    >
                      Hrithik Roshan
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Ranbir-Kapoor"
                      onClick={() => detailPage(curElem)}
                    >
                      Ranbir Kapoor
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Ranveer-Singh"
                      onClick={() => detailPage(curElem)}
                    >
                      Ranveer Singh
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Ajay-Devgn"
                      onClick={() => detailPage(curElem)}
                    >
                      Ajay Devgn
                    </Link>
                  </li>
                  <li className="py-4 px-4">
                    <Link
                      to="/profile/Sidharth-Malhotra "
                      onClick={() => detailPage(curElem)}
                    >
                      Sidharth Malhotra
                    </Link>
                  </li>
                </ul>
              </aside>
            </>
          );
        })}

      </div> */}
      <div className="  sm:absolute bg-gray-600  sm:w-64 h-screen pt-10 pl-10">
        {AcotorsData.map((e) => {
          return (
            <>
              <ul>
                <li className="py-4 px-4 text-white">
                  <Link onClick={() => displayData(e)}>{e.Name} </Link>
                </li>
              </ul>
            </>
          );
        })}
      </div>

      <div>
        {data.map((x) => {
          return (
            <>
              <div className=" h-screen bg-gray-300 sm:ml-56 ">
                <div className="  container mx-auto mb-10 pt-10">
                  <img
                    src={x.img}
                    className="rounded shadow-xl w-56 h-80 mx-auto"
                  />
                </div>
                <div className="font-medium px-20 text-center pt-10">
                  <h1 className="font-bold mb-5 text-2xl "> {x.Name}</h1>
                  <p>{x.About}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
