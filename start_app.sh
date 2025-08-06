#!/bin/bash
echo "🚀 Démarrage de l'application..."

# Démarrer le backend en arrière-plan
echo "📦 Démarrage du backend..."
cd "backend" || exit
npm run dev &

# Attendre un peu que le backend démarre
sleep 3

# Revenir au répertoire racine et démarrer le frontend
echo "🎨 Démarrage du frontend..."
cd "../frontend" || exit
npm run start &

echo "✅ Backend démarré"
echo "✅ Frontend démarré"
echo ""
echo "Pour arrêter l'application, utilisez Ctrl+C"


cleanup() {
    echo ""
    echo "🛑 Arret de l'application..."
    kill $BACKEND 2>/dev/null
    echo "Backend killed"
    kill $FRONTEND_PID 2>/dev/null
    echo "Frontend killed"
    exit 0
}

# Capturer Ctrl+C
trap cleanup INT

# Garder le script actif
wait




