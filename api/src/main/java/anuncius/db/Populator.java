/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anuncius.db;

import anuncius.singleton.MongoHandler;
import java.util.ArrayList;

/**
 *
 * @author sanguita
 */
public class Populator {
    
    public void populate(){
        ArrayList<String> sentences = new ArrayList();
        sentences.add("Pregúntate si lo que estás haciendo hoy te acerca al lugar en el que quieres estar mañana.$Walt Disney");
        sentences.add("Esperar duele. Olvidar duele. Pero el peor de los sufrimientos es no saber qué decisión tomar.$Paulo Coelho");
        sentences.add("El talento depende de la inspiración, pero el esfuerzo depende de cada uno.$Pep Guardiola");
        sentences.add("Sólo una cosa convierte en imposible un sueño: el miedo a fracasar.$Paulo Coelho");
        sentences.add("Solo existen dos días en el año en que no se puede hacer nada. Uno se llama ayer y otro mañana. Por lo tanto hoy es el dia ideal para amar, crecer, hacer y principalmente vivir.$Dalai Lama");
        sentences.add("El genio se hace con un 1% de talento, y un 99% de trabajo.$Albert Einstein");
        sentences.add("Tu tiempo es limitado, de modo que no lo malgastes viviendo la vida de alguien distinto. No quedes atrapado en el dogma, que es vivir como otros piensan que deberías vivir. No dejes que los ruidos de las opiniones de los demás acallen tu propia voz interior. Y, lo que es más importante, ten el coraje para hacer lo que te dice tu corazón y tu intuición.$Steve Jobs");
        sentences.add("No duermas para descansar, duerme para soñar. Porque los sueños están para cumplirse.$Walt Disney");
        sentences.add("Todos tus sueños pueden hacerse realidad si tienes el coraje de perseguirlos.$Walt Disney");
    }
    
    public void createSchema(){
        MongoHandler.getInstance("anuncius").createInitialSchema();
    }
}
