#!/bin/bash
echo "🚀 Démarrage des vérifications..."
cd "frontend" || exit

echo "🚨 Vérification du typage..."
npm run typecheck

echo "🚨 Vérification de la mise en forme du code..."
npx prettier . --check
echo ""

echo "🚨 Vérification du respect des bonnes pratiques ECMAScript/JavaScript..."
npm run lint
echo ""

echo "♻️ Voulez vous nettoyer le code ? Y/N"
read choice
if [[ $choice == [Yy]* ]]; then
    npm run fmt
    echo "✅ Nettoyage terminé"
fi

echo ""
echo "✅ Vérifications terminées" 
