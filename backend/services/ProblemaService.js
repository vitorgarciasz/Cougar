import Problema from "../models/ProblemaModel.js";
import { connectDB, closeConnectionDB } from "../config/databaseConfig.js";

class ProblemaService {
    async cadastrarProblema(descricao){
        await connectDB()
        const newProblem = new Problema({ descricao });
        const savedProblem = await newProblem.save();
        console.log('Problema salvo:', savedProblem);
        await closeConnectionDB()
        return savedProblem;
    }

    async buscarProblema(descricao) {
        await connectDB()
        const problemaEncontrado = await Problema.findOne({ descricao });
        console.log('Problema encontrado:', problemaEncontrado);
        await closeConnectionDB()
        return problemaEncontrado;
    }

    async getAllProblems(){
        await connectDB()

        const problemasEncontrados = await Problema.find()

        await closeConnectionDB()

        return problemasEncontrados
    }

    async excluirProblema(){
        await connectDB()

        

        await closeConnectionDB()
    }
}
export default new ProblemaService(); 