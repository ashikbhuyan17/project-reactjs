// import React, { useState } from 'react';
// import './Auth2.css'
// import twitter from '../../../images/twitter.png'
// import linkedin from '../../../images/linkedin.png'
// import instagram from '../../../images/instagram.png'
// import facebook from '../../../images/facebook.png'

// const Auth2 = () => {
//     const [addClass, setAddClass] = useState("")

//     return (
//         <div>
//             <div class={`cont ${addClass}`}>
//                 <div class="form sign-in">
//                     <h2>Sign In</h2>
//                     <div>
//                         <span>Email Address</span>
//                         <input type="email" name="email" />
//                     </div>
//                     <div>
//                         <span>Password</span>
//                         <input type="password" name="password" />
//                     </div>
//                     <button class="submit" type="button">Sign In</button>
//                     <p class="forgot-pass">Forgot Password ?</p>

//                     <div class="social-media">
//                         <ul>
//                             <li><img src={facebook} /></li>
//                             <li><img src={twitter} /></li>
//                             <li><img src={linkedin} /></li>
//                             <li><img src={instagram} /></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div class="sub-cont">
//                     <div class="img">
//                         <div class="img-text m-up">
//                             <h2>New here?</h2>
//                             <p>Sign up and discover great amount of new opportunities!</p>
//                         </div>
//                         <div class="img-text m-in">
//                             <h2>One of us?</h2>
//                             <p>If you already has an account, just sign in. We've missed you!</p>
//                         </div>
//                         <div class="img-btn">
//                             <span class="m-up" onClick={() => setAddClass('s-signup')}>Sign Up</span>
//                             <span class="m-in" onClick={() => setAddClass()}>Sign In</span>
//                         </div>
//                     </div>
//                     <div class="form sign-up">
//                         <h2>Sign Up</h2>
//                         <div>
//                             <span>Name</span>
//                             <input type="text" />
//                         </div>
//                         <div>
//                             <span>Email</span>
//                             <input type="email" />
//                         </div>
//                         <div>
//                             <span>Password</span>
//                             <input type="password" />
//                         </div>
//                         <div>
//                             <span>Confirm Password</span>
//                             <input type="password" />
//                         </div>
//                         <button type="button" class="submit">Sign Up Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth2;