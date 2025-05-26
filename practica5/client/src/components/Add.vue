<template>
    <el-button plain @click="dialogFormVisible = true">Crear nuevo Team</el-button>
    <el-dialog v-model="dialogFormVisible" title="Inscribe un Nuevo Equipo a la UCI" width="500">
        <el-form :model="form" @submit.prevent="enviarTeam()">
            <el-form-item label="Nombre del Equipo" :label-width="formLabelWidth">
                <el-input v-model="form.nomequipo" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Pais " :label-width="formLabelWidth">
                <el-input v-model="form.pais" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Director Tecnico " :label-width="formLabelWidth">
                <el-input v-model="form.directortec" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Patrocinador " :label-width="formLabelWidth">
                <el-input v-model="form.patrocinador" autocomplete="off" />
            </el-form-item>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancelar</el-button>
                <el-button type="primary" native-type="submit">
                        Crear
                </el-button>
            </div>
        </el-form>
    </el-dialog>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import { postTeam } from '../apis/apis.js';
    import { useToast } from "vue-toastification";

    const toast = useToast();
    const dialogFormVisible = ref(false);
    const formLabelWidth = '140px';
    const emit = defineEmits(['team-agregado']);
    const form = reactive({
        namequipo: '',
        pais: '',
        directortec: '',
        patrocinador: '',
    });

    const enviarTeam = async()=>{
        try{
            const data = {
                ...form
            }
            await postTeam(data);
            dialogFormVisible.value=false;
            emit('team-agregado');
            toast.success("Se agrego correctamente",{
                position: "top-ceneter",
                timeout:3000,
            });
        }catch(error){
            console.error(error);
        }
    }
</script>

<style>
</style>