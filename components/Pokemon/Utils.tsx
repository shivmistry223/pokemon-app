export const getTypeDetails = (type = "") => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡" }; // Pikachu
        case "fire":
            return { borderColor: "#FF4500", emoji: "🔥" }; // Charmander
        case "grass":
            return { borderColor: "#228B22", emoji: "🌿" }; // Bulbasaur
        case "water":
            return { borderColor: "#1E90FF", emoji: "💧" }; // Squirtle
        case "normal":
            return { borderColor: "#A8A77A", emoji: "⭐" }; // Eevee
        default:
            return { borderColor: "#808080", emoji: "❓" }; // Unknown
    }
};
