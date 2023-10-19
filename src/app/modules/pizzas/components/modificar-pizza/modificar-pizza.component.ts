import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.scss']
})
export class ModificarPizzaComponent {
  @Input() item?: Pizza;
  @Output() confirmar: EventEmitter<void> = new EventEmitter<void>();
  modPizzaForm!: FormGroup;

  get nombre() {
    return this.modPizzaForm.get('nombre');
  }
  get ingredientes() {
    return this.modPizzaForm.get('ingredientes');
  }
  get precio() {
    return this.modPizzaForm.get('precio');
  }
  get peso() {
    return this.modPizzaForm.get('peso');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.modPizzaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      precio: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(500), Validators.max(1000)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.nombre?.setValue(this.item?.nombre);
    this.ingredientes?.setValue(this.item?.ingredientes);
    this.precio?.setValue(this.item?.precio);
    this.peso?.setValue(this.item?.peso);
  }

  confirmar_submit() {
    if (this.modPizzaForm.valid && this.item) {

      this.item.ingredientes = this.ingredientes?.value;
      this.item.peso = this.peso?.value;
      this.item.precio = this.precio?.value;

      this.confirmar.emit();

    } else {
      console.error(this.modPizzaForm.errors);
    }
  }
}
