npx -y create-next-app@14.2.15 temp_app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
Move-Item -Path temp_app\* -Destination . -Force
Move-Item -Path temp_app\.* -Destination . -Force
Remove-Item temp_app -Recurse -Force
mkdir public -ErrorAction SilentlyContinue
Move-Item -Path ..\sequence_temp -Destination public\sequence
npm install framer-motion lucide-react clsx tailwind-merge
