import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios=[];
  
  
  constructor(public alertCtlr: AlertController) {}
  
  guardarDatos(){

    /* console.log(this.nombre)
    console.log(this.apellido)
    console.log(this.celular)
    console.log(this.email)  
    */
   //agregando datos a la base en memoria:

      this.usuarios.push({
        nombre:this.nombre,
        apellido:this.apellido,
        celular:this.celular,
        email:this.email
        
      })
      //limpiando datos
      this.nombre="";
      this.apellido="";
      this.celular="";
      this.email="";
      console.log(this.usuarios)
    
    
   
   

  }
  /*editarUsuarios(usuarios){
    
       
    this.nombre=usuarios.nombre,
        this.apellido=usuarios.apellido,
        this.celular=usuarios.celular,
        this.email=usuarios.email;

  }

   
  
  eliminarUsuarios(datos){
    var x=this.usuarios.indexOf(datos)
    this.usuarios.splice(x,1)
  }
  async editarUsuarios(n){
    const input=await this.alertCtlr.create({
      header:'modificar',
      subHeader:"Nombre",
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          value: this.usuarios[n].nombre
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        { text: 'Editar', handler: data => {
          console.log(this.usuarios[n]);
    })
  }*/

  editarUsuarios(usuarios){
    this.nombre= usuarios.nombre,
     this.apellido= usuarios.apellido,
     this.celular= usuarios.celular,
     this.email= usuarios.email;
     this.eliminarUsuarios(usuarios);
  }
 eliminarUsuarios(usuarios){
    this.usuarios.splice(usuarios,1);
  }

}
