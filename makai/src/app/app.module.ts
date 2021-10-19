import { NgModule } from '@angular/core';
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
import { ShopComponent } from './footer/footer/rightside/shop/shop.component';
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
    ShopComponent,
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
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PositionDirective
  ]
})
export class AppModule { }
