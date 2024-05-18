import React from 'react'
import "../assets/style/home.css"
import "../assets/style/Footer.css"

const Home = () => {
  return (
    <div>
            <header>    
        <nav>
        <div class="logo">
            <img src="images/logo1.png" alt="Logo" />
            <span>CodeBlog</span>
        </div>
        <div class="auth-buttons">
            <button><a href="/login">Sign In</a></button>
            <button><a href="/signup">Sign Up</a></button>
        </div>
    </nav></header>
    <section class="index-first">
        <div class="flex-container">
            <div class="info">
                <div class="hashtag"> &nbsp;&nbsp;#CodeWithoutLimits</div>
                <h1>Elevate Your Code on CodeBlog</h1>
                <p>Unlock coding potential with tutorials, trends, and a vibrant community. Start for free. Code. Connect. Create.</p>
                <div class="buttons-container">
                    <a href="Login.html" class="explore-button">Explore</a>
                    <button class="subscribe-button"><a href="Login.html">→</a></button>
                </div>
            </div>
            <div class="hexagon-container">
                <img src="images/blog1.webp" alt="Image" />
                <svg class="hexagon-clip" width="0" height="0">
                    <clipPath id="hexagon-clip-path" clipPathUnits="objectBoundingBox">
                        <polygon points="0.0795 0.2728,
                        0.212889 0.059377 ,0.32002 0,
                        0.80 0, 0.875725 0.0428747,
                        0.97427525 0.2071254 , 1 0.3,
                        1 0.86 , 0.86 1,
                        0.5 1 , 0.42 0.96,
                         0.09 0.52" />
                        <circle cx="0.5" cy="0.9" r="0.1" />
                        <circle cx="0.86" cy="0.86" r="0.14" />
                        <circle cx="0.819484095" cy="0.3" r="0.180515905" />
                        <circle cx="0.8" cy="0.0883095" r="0.0883095" />
                        <circle cx="0.32002" cy="0.126334" r="0.126334" />
                        <circle cx="0.26501" cy="0.38874" r="0.2187602425" />
                        
                    </clipPath>
                </svg>
            </div>

        </div>

</section>
<section class="index-second">
<div class="p-blog">
    <p>Top Blogs</p>
</div>
    <div class="card-index">
        <div class="card-image">
            <img src="images/BlogData/binary tree.png" alt="" />
            <div class="card-topic">
                <p class="topic-name">Binary Tree</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>
        <div class="card-image">
            <img src="images/BlogData/bucket sort.png" alt="" />
            <div class="card-topic">
                <p class="topic-name">Bucket Sort</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>
        <div class="card-image">
            <img src="images/BlogData/dining philosopher.png" alt=""/>
            <div class="card-topic">
                <p class="topic-name">Dining Philosopher</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>
        <div class="card-image">
            <img src="images/BlogData/DFS graph.png" alt="" />
            <div class="card-topic">
                <p class="topic-name">Graph DFS</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>
        <div class="card-image">
            <img src="images/BlogData/circular linked list.jpeg" alt="" />
            <div class="card-topic">
                <p class="topic-name">Circluar linked list</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>
        <div class="card-image">
            <img src="images/BlogData/fibbonacci.jpeg" alt="" />
            <div class="card-topic">
                <p class="topic-name">Fibbonacci</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>
        
        <div class="card-image">
            <img src="images/BlogData/tries.png" alt="" />
            <div class="card-topic">
                <p class="topic-name">Tries</p>

            </div>
            <div class="explore-btn">
                <button>Explore</button>
            </div>
        </div>

    </div>
</section>
<footer>
    <div class="footer-main">
        <div class="footer-div1" >
            <h3 id="h2"> Code-Blog</h3>
            <p>Get the latest coding tips and insights! <br/> Subscribe to CodeBlog's newsletter.</p>

         <div class="subscribe-form">
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <button type="submit" class="subscribe-button">→</button>
          </div>
            
        </div>
        <div class="footer-div2">
            <div class="footer-link">
            <h3 style={{textAlign: 'center'}}>Company</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-link">
                <h3>Documentation</h3>
                <ul>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-link">
                <h3>Social</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
  
    </div>
    <div class="footer-last">
    </div>
    
    <div class="copyright">
        <p  id="p1">© Code-Blog Inc. All Rights Reserved 2024</p> 
        <p id="p2"><a href="#">Terms & Conditions</a></p>
    </div>
</footer>
    </div>
  )
}

export default Home
