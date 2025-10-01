import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';

export const routes: Routes = [
	{path: "", component: Home},
	{path: "home", component: Home},
	{path: "about", component: About},
	{path: "contact", component: Contact},
	{path: "product", component: Product}
];
