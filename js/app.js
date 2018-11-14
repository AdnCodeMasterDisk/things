const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Things to do',
        tareas: [],
        nuevatarea: ''
    },

    methods:{
        agregartarea: function(){
            this.tareas.push({
                nombre: this.nuevatarea,
                estado: false,
                favorita: false
            });
            this.nuevatarea = '';
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },

        editartarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },

        eliminartarea: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },

        tareafavorita: function(index){
            this.tareas[index].favorita = true;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        }
    },

    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
});