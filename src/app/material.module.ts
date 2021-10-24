import {NgModule} from "@angular/core"
import { MatToolbarModule,MatIconModule,MatCardModule,MatButtonModule,MatFormFieldModule, MatInputModule,MatRadioModule, MatSelectModule} from "@angular/material"

@NgModule({
    exports:[
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule
    ]
})

export class MaterialModule{}