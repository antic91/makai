import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogSeparateComponent } from './blog-separate/blog-separate.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"home", redirectTo:""},
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  { path: "blog", component: BlogComponent },
  { path: "blog/:param1/:paramId", component: BlogSeparateComponent, pathMatch: 'full' },
  { path: "shop/:cat/:subCat", component: ShopComponent, pathMatch: 'full' },
  { path: "shop/:cat/:subCat/:prodTitle/:catId/:subCatId/:prod_id", component: ProductComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
