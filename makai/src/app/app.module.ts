import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { LogoComponent } from './navbar/navbar/logo-top/logo/logo.component';
import { BottomComponent } from './navbar/navbar/bottom/bottom/bottom.component';
import { SearchComponent } from './navbar/navbar/bottom/bottom/search/search/search.component';
import { BagComponent } from './navbar/navbar/bottom/bottom/bag/bag/bag.component';
import { NavbarcompComponent } from './navbar/navbar/bottom/bottom/navbarcomp/navbarcomp.component';
import { LeftsideComponent } from './footer/footer/leftside/leftside.component';
import { RightsideComponent } from './footer/footer/rightside/rightside.component';
import { PageComponent } from './footer/footer/rightside/page/page.component';
import { ShopComponent1 } from './footer/footer/rightside/shop-one/shop-one.component';
import { SocialComponent } from './footer/footer/rightside/social/social.component';
import { UtilityComponent } from './footer/footer/rightside/utility/utility.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { BrandsComponent } from './home/brands/brands.component';
import { SectionComponent } from './home/section/section.component';
import { PositionDirective } from './directives/position.directive';
import { SectionCollectionComponent } from './home/section-collection/section-collection.component';
import { VideoComponent } from './home/video/video.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { HeadingComponent } from './home/heading/heading.component';
import { SurfComponent } from './home/surf/surf.component';
import { BlogSectionComponent } from './home/blog-section/blog-section.component';
import { ReviewSliderComponent } from './home/review-slider/review-slider.component';
import { TextContentComponent } from './home/blog-section/text-content/text-content.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { IconsComponent } from './home/icons/icons.component';
import { DropDownComponent } from './navbar/navbar/bottom/bottom/navbarcomp/drop-down/drop-down.component';
import { AboutComponent } from './about/about.component';
import { TopComponentComponent } from './about/top-component/top-component.component';
import { ManWithBoardComponent } from './about/man-with-board/man-with-board.component';
import { TextComponentComponent } from './about/text-component/text-component.component';
import { FourSectionsComponent } from './about/four-sections/four-sections.component';
import { TeamComponent } from './about/team/team.component';
import { BrandsAboutComponent } from './about/brands-about/brands-about.component';
import { PhotoBoxComponent } from './about/photo-box/photo-box.component';
import { ContactComponent } from './contact/contact.component';
import { ContactTopComponent } from './contact/contact-top/contact-top.component';
import { TextCompComponent } from './contact/text-comp/text-comp.component';
import { FolowComponent } from './contact/folow/folow.component';
import { BlogComponent } from './blog/blog.component';


import { UseClass } from './commonErrors/use-class';
import { PostService } from './services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBlogComponent } from './blog/top-blog/top-blog.component';
import { BlogTextComponent } from './blog/blog-text/blog-text.component';
import { OtherBlogsComponent } from './blog/other-blogs/other-blogs.component';
import { BlogSeparateComponent } from './blog-separate/blog-separate.component';
import { BlogDetailsComponent } from './blog-separate/blog-details/blog-details.component';
import { BlogPhotoComponent } from './blog-separate/blog-photo/blog-photo.component';
import { TopComponent } from './blog-separate/blog-details/top/top.component';
import { SecondDetailsComponent } from './blog-separate/blog-details/second-details/second-details.component';
import { GroupPhotosComponent } from './blog-separate/blog-details/group-photos/group-photos.component';
import { SecondTextComponent } from './blog-separate/blog-details/second-text/second-text.component';
import { LastPhotoComponent } from './blog-separate/blog-details/last-photo/last-photo.component';
import { BottomTextComponent } from './blog-separate/blog-details/bottom-text/bottom-text.component';
import { ItemsShowComponent } from './home/items-show/items-show.component';
import { OneItemComponent } from './one-item/one-item.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemsRightComponent } from './shop/shop-items-right/shop-items-right.component';
import { ShopItemsLeftComponent } from './shop/shop-items-left/shop-items-left.component';
import { RouteComponentComponent } from './shop/route-component/route-component.component';
import { ProductComponent } from './product/product.component';
import { PhotosComponent } from './product/photos/photos.component';
import { TextShopComponent } from './product/text-shop/text-shop.component';
import { DetailsBottomComponent } from './product/details-bottom/details-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    BottomComponent,
    SearchComponent,
    BagComponent,
    NavbarcompComponent,
    LeftsideComponent,
    RightsideComponent,
    PageComponent,
    ShopComponent1,
    SocialComponent,
    UtilityComponent,
    HomeComponent,
    BannerComponent,
    BrandsComponent,
    SectionComponent,
    PositionDirective,
    SectionCollectionComponent,
    VideoComponent,
    NewsletterComponent,
    HeadingComponent,
    SurfComponent,
    BlogSectionComponent,
    ReviewSliderComponent,
    TextContentComponent,
    ReviewsComponent,
    IconsComponent,
    DropDownComponent,
    AboutComponent,
    TopComponentComponent,
    ManWithBoardComponent,
    TextComponentComponent,
    FourSectionsComponent,
    TeamComponent,
    BrandsAboutComponent,
    PhotoBoxComponent,
    ContactComponent,
    ContactTopComponent,
    TextCompComponent,
    FolowComponent,
    BlogComponent,
    TopBlogComponent,
    BlogTextComponent,
    OtherBlogsComponent,
    BlogSeparateComponent,
    BlogDetailsComponent,
    BlogPhotoComponent,
    TopComponent,
    SecondDetailsComponent,
    GroupPhotosComponent,
    SecondTextComponent,
    LastPhotoComponent,
    BottomTextComponent,
    ItemsShowComponent,
    OneItemComponent,
    ShopComponent,
    ShopItemsRightComponent,
    ShopItemsLeftComponent,
    RouteComponentComponent,
    ProductComponent,
    PhotosComponent,
    TextShopComponent,
    DetailsBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: UseClass }
  ],
  bootstrap: [AppComponent],
  exports: [
    PositionDirective
  ]
})
export class AppModule { }
