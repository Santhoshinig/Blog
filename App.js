import { useState } from 'react';
import {BasicExample} from './Blog.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './green blog.jpg';
import china from './china.jpg';
import ice from'./icecream.jpg';
import parr from './parr1.jpg';
export default function App() {  

   const [searchTerm, setSearchTerm] = useState('');
   const handleInputChange = (event) => {
     setSearchTerm(event.target.value);
   }
    const blog=[
    {  
     image:china,
     id:"1",
     title:'China-The Luxurious Country',
     author:'Leo',
     smallview:'The diversity of both China’s relief and its climate has resulted in one of the world’s widest arrays of ecological niches, and these niches have been filled by a vast number of plant and animal species.',
     content:'China is a country in East Asia bordering the East China Sea, Korea Bay, and the South China Sea. Neighboring countries include 14 sovereign states. The terrain is diverse in China with mostly mountains along with deserts in the west and plains in the east.China, Chinese (Pinyin) Zhonghua or (Wade-Giles romanization) Chung-hua, also spelled (Pinyin) Zhongguo or (Wade-Giles romanization) Chung-kuo, officially People’s Republic of China or Chinese (Pinyin) Zhonghua Renmin Gongheguo or (Wade-Giles romanization) Chung-hua Jen-min Kung-ho-kuo, country of East Asia. It is the largest of all Asian countries and has the largest population of any country in the world. Occupying nearly the entire East Asian landmass, it covers approximately one-fourteenth of the land area of Earth. Among the major countries of the world, China is surpassed in area by only Russia and Canada, and it is almost as large as the whole of Europe. Shanghai: financial districtShanghai: financial district Shanghai: Huangpu district, Shanghai: Huangpu district.China has 33 administrative units directly under the central government; these consist of 22 provinces, 5 autonomous regions, 4 municipalities (Chongqing, Beijing, Shanghai, and Tianjin), and 2 special administrative regions (Hong Kong and Macau). The island province of Taiwan, which has been under separate administration since 1949, is discussed in the article Taiwan. Beijing (Peking), the capital of the People’s Republic, is also the cultural, economic, and communications centre of the country. Shanghai is the main industrial city; Hong Kong is the leading commercial centre and port.',
      ratings:'9/10'
    },
    {
     image:ice,
     id:"2",
     title:'Ibaco The IceCream Field',
     author:'KimLee',
     smallview:'Commercial ice cream is made by combining, under constant agitation, the liquid ingredients (milk, cream, syrups, etc.). These liquids are heated and combined with dry ingredients (sugar, stabilizers, dried eggs or milk) to form a mix, which is then pasteurized and homogenized',
     content:'Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches. Food colouring is sometimes added in addition to stabilizers.Ice cream, frozen dairy food made from cream or butterfat, milk, sugar, and flavourings. Frozen custard and French-type ice creams also contain eggs. Hundreds of flavours have been devised, the most popular being vanilla, chocolate, and strawberry.Iced desserts were introduced into Europe from the East. Marco Polo brought back descriptions of fruit ices from his travels in China. Italian cooks developed recipes and techniques for making both water and milk ices; Buontalenti, one of the cooks taken to France by Catherine de Medici, first prepared such treats for the French court. In 1686 a Sicilian, Francesco Procopio, opened a café in Paris and began to sell ices and sherbets, which became so popular that numerous other ice makers soon opened in the capital. Tortoni, owner of a café in late-18th-century Paris, is credited with developing cream ices. In the United States, ice cream was served by George Washington, Thomas Jefferson, and Dolley Madison. Philadelphia became the hub of ice-cream manufacture in the United States; the ice-cream soda was invented there in 1874. The ice-cream cone, portable and self-contained, originated at the 1904 World’s Fair in St. Louis, Missouri. San Francisco’s Ghirardelli Square, home to the onetime chocolate factory, became famous for its hot-fudge sundaes.',
     ratings:'9.5/10'},
     {
    
     image:parr,
     id:"3",
     title:'Speaking Bird Parrot ',
     author:'David',
     smallview:'The African gray parrot (Psittacus erithacus) is unsurpassed as a talker; the male can precisely echo human speech. Captive birds are alert and, compared with other parrots, relatively good-tempered. Some are said to have lived 80 years. ',
     content:'Parrots, also known as psittacines, are birds with a strong curved beak, upright stance, and clawed feet. They are made up of four families that contain roughly 410 species in 101 genera, found mostly in tropical and subtropical regions. Parrots are known as one of the most intelligent birds, along with crows, magpies, and jays. Parrots have the ability to understand the emotions and behaviours of humans. They can also speak the human language, which is why they are called talking birds. Parrots are found in dense forests and mostly in flocks.Among other proficient mimics are the Amazon parrots (Amazona). The 31 species of Amazons are chunky birds, mostly 25 to 40 cm (10 to 16 inches) long, with slightly erectile crown feathers and a rather short, squared tail. Their predominantly green plumage is marked with other bright colours, chiefly on the upper head; the sexes look alike. Amazon parrots live in tropical forests of the West Indies and Mexico to northern South America. They are difficult to breed and may be aggressive as well as squawky. Common in aviaries is the blue-fronted Amazon (A. aestiva) of Brazil; it has a blue forehead, a yellow or blue crown, a yellow face, and red shoulders. The yellow-crowned parrot (A. ochrocephala) of Mexico, Central America, and from Ecuador to Brazil has some yellow on the head and neck, a red wing patch, and a yellow tail tip. Black-capped parakeet (Pyrrhura rupicola), Black-capped parakeet (Pyrrhura rupicola), The monk, or green, parakeet (Myiopsitta monachus) is one of the hardiest parrot species. It is native to South America, but some have escaped from captivity in the United States and now nest in several states. Its large stick nest is unique among psittaciforms. Other remarkable parrots of this subfamily include the hanging parrots (Loriculus), which sleep upside-down like bats. Caiques (Pionites) are small, short-tailed South American birds similar to conures in build and habits. ',
     ratings:'9.2/10'
     },
    ];
      const filteredBlogs = blog.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
return(
   <div className='bar'>
    <header>
<img src={header} alt='header' style={{height:'300px', width:'1500px',backgroundSize:'cover', paddingBottom:'30px'}}/>
</header>
      <input type="text" placeholder='Search the Blogs' value={searchTerm} onChange={handleInputChange} 
      style={{width:'60%',height:'40px',borderRadius:'20px',paddingRight:'40px',borderBlockColor:"blue"}}/>
    {filteredBlogs.map((newblog)=>(
      <BasicExample
      key={newblog.id}
      image={newblog.image}
       title={newblog.title}
       author={newblog.author}
       smallview={newblog.smallview}
       content={newblog.content}
       ratings={newblog.ratings}
       />
     ) )}
   </div>
);
}
