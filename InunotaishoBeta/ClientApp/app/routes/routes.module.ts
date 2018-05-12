import { Routes, CanActivate } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { EdComponent } from '../components/education/ed.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { BlogComponent } from '../components/blog/blog.component';
import { BlogPostComponent } from '../components/blogpost/blogpost.component';
import { LoginComponent }from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { WriteComponent } from '../components/write/write.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RegComponent } from '../components/reg/reg.component';
import { ErrorComponent } from '../components/errors/error.component';
import portImgContainer from '../components/portfolio/images/portfolio.image.component';
import FroalaEditor from '../components/write/froala-editor/froala.component';

import { AuthGuard } from "../services/authguard/authguard.service"


export const routes: Routes = [
    {
      path:'',
      pathMatch:'full',
      redirectTo: 'home',
      component:HomeComponent,

      // *** SEO Magic ***
        // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
        // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
        // When you change Routes it will automatically append these to your document for you on the Server-side
        //  - check out app.component.ts to see how it's doing this

      data:{
        title: 'Homepage',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'education',
      component:EdComponent,
      data:{
        title: 'Education',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'portfolio',
      component: PortfolioComponent,
      data:{
        title: 'Portfolio',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'blog',
      component:BlogComponent,
      data:{
        title: 'Blog',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'login',
      component: LoginComponent,
      data:{
        title: 'Education',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard],
      data:{
        title: 'Profile',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }},
    {
      path:'write',
      component: WriteComponent,
      canActivate: [AuthGuard],
      data:{
        title: 'Write',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'contact',
      component: ContactComponent,
      data:{
        title: 'Contact',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'reg',
      component: RegComponent,
      data:{
        title: 'Registration',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path:'blogPost',
      component: BlogPostComponent,
      data:{
        title: 'Education',
        meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
      }
    },
    {
      path: '**',
      component: ErrorComponent,
      data:{
        title: '404 - Not found',
        meta: [{ name: 'description', content: '404 - Error' }],
      }
     }
   ]



//    RouterModule.forRoot([
//     {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full'
//     },
//     {
//         path: 'home', component: HomeComponent,

//         // *** SEO Magic ***
//         // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
//         // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
//         // When you change Routes it will automatically append these to your document for you on the Server-side
//         //  - check out app.component.ts to see how it's doing this
//         data: {
//             title: 'Homepage',
//             meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
//             links: [
//                 { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
//                 { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/' }
//             ]
//         }
//     },
//     {
//         path: 'counter', component: CounterComponent,
//         data: {
//             title: 'Counter',
//             meta: [{ name: 'description', content: 'This is an Counter page Description!' }],
//             links: [
//                 { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
//                 { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
//             ]
//         }
//     },
//     {
//         path: 'users', component: UsersComponent,
//         data: {
//             title: 'Users REST example',
//             meta: [{ name: 'description', content: 'This is User REST API example page Description!' }],
//             links: [
//                 { rel: 'canonical', href: 'http://blogs.example.com/chat/something' },
//                 { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/users' }
//             ]
//         }
//     },
//     {
//         path: 'ngx-bootstrap', component: NgxBootstrapComponent,
//         data: {
//             title: 'Ngx-bootstrap demo!!',
//             meta: [{ name: 'description', content: 'This is an Demo Bootstrap page Description!' }],
//             links: [
//                 { rel: 'canonical', href: 'http://blogs.example.com/bootstrap/something' },
//                 { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/bootstrap-demo' }
//             ]
//         }
//     },

//     { path: 'lazy', loadChildren: './containers/lazy/lazy.module#LazyModule'},

//     {
//         path: '**', component: NotFoundComponent,
//         data: {
//             title: '404 - Not found',
//             meta: [{ name: 'description', content: '404 - Error' }],
//             links: [
//                 { rel: 'canonical', href: 'http://blogs.example.com/bootstrap/something' },
//                 { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/bootstrap-demo' }
//             ]
//         }
//     }
// ],
