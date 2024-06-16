import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent{

    @Input() categories!: any;

    getIconCategory(category: string) {

        const icons: {[key: string]: string} = {
            'electronics': 'fa-television',
            'jewelery': 'fa-life-ring',
            "men's clothing": 'fa-male',
            "women's clothing": 'fa-female'
        }

        return icons[category];
    }
}
