import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './app-container.component.html',
    styleUrl: './app-container.component.scss'
})
export class AppContainerComponent {

    @ContentChild('sidebar') sidebar!: TemplateRef<any>;
    @ContentChild('main') main!: TemplateRef<any>;
}
