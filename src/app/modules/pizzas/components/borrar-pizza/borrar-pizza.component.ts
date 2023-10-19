import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.scss']
})
export class BorrarPizzaComponent {
  @Input() item?: Pizza;
  @Output() confirmar: EventEmitter<void> = new EventEmitter<void>();
  borrarPizzaForm!: FormGroup;

  get nombre() {
    return this.borrarPizzaForm.get('nombre');
  }
  get ingredientes() {
    return this.borrarPizzaForm.get('ingredientes');
  }
  get precio() {
    return this.borrarPizzaForm.get('precio');
  }
  get peso() {
    return this.borrarPizzaForm.get('peso');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.borrarPizzaForm = this.formBuilder.group({
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

  onSubmit() {
    if (this.borrarPizzaForm.valid && this.item) {
      this.confirmar.emit();
      this.item = undefined;
    } else {
      console.error(this.borrarPizzaForm.errors);
    }
  }
}
