function juego(user, cpu, resultado) {
    switch (true) {
        case (user === "fa-solid fa-hand-back-fist" && cpu === "fa-solid fa-hand-scissors"):
                var mensaje = "¡El usuario Gano!";
                resultado[1]++;
                return [ mensaje , resultado[1], resultado[2] ];
                break;
        case (user === "fa-solid fa-hand-back-fist" && cpu === "fa-solid fa-hand"):
                var mensaje = "¡La CPU Gano!";
                resultado[2]++;
                return [ mensaje , resultado[1], resultado[2] ];
                break;
        case (user === "fa-solid fa-hand" && cpu === "fa-solid fa-hand-back-fist"):
                var mensaje = "¡El usuario Gano!";
                resultado[1]++;
                return [ mensaje , resultado[1], resultado[2] ];
                break;
        case (user === "fa-solid fa-hand" && cpu === "fa-solid fa-hand-scissors"):
                var mensaje = "¡La CPU Gano!";
                resultado[2]++;
                return [ mensaje , resultado[1], resultado[2] ];
                break;
        case (user === "fa-solid fa-hand-scissors" && cpu === "fa-solid fa-hand-back-fist"):
                var mensaje = "¡La CPU Gano!";
                resultado[2]++;
                return [ mensaje , resultado[1], resultado[2] ];
                break;
        case (user === "fa-solid fa-hand-scissors" && cpu === "fa-solid fa-hand"):
                var mensaje = "¡El usuario Gano!";
                resultado[1]++;
                return [ mensaje , resultado[1], resultado[2] ];
                break;
        case (user == cpu):
                var mensaje = "¡EMPATE!";
                return [ mensaje , resultado[1], resultado[2] ];
                break;
    }
}
