# 📤 Instrucciones para Subir a GitHub

## Opción 1: Usar GitHub CLI (Recomendado)

```bash
# 1. Verificar que tengas GitHub CLI instalado
gh --version

# 2. Logearte en GitHub
gh auth login

# 3. Ir a la carpeta del proyecto
cd enerted-web-redesign

# 4. Crear repositorio en GitHub (desde terminal)
gh repo create enerted-web-redesign \
  --source=. \
  --remote=origin \
  --push \
  --public \
  --description="Propuesta Integral de Marketing Digital y Rediseño Web para ENERTED"

# ¡Listo! Tu repo está en GitHub
```

---

## Opción 2: Manualmente en GitHub.com

### Paso 1: Crear el repositorio en GitHub

1. Ir a https://github.com/new
2. **Nombre del repo**: `enerted-web-redesign`
3. **Descripción**: `Propuesta Integral de Marketing Digital y Rediseño Web para ENERTED`
4. **Tipo**: Public
5. Hacer clic en "Create repository"

### Paso 2: Subir los archivos

```bash
# 1. Ir a la carpeta
cd enerted-web-redesign

# 2. Inicializar git (si no lo hiciste)
git init
git add .
git commit -m "feat: initial setup - propuesta marketing digital"

# 3. Agregar el repositorio remoto
git remote add origin https://github.com/henryor/enerted-web-redesign.git

# 4. Subir a GitHub
git branch -M main
git push -u origin main

# ¡Listo!
```

---

## Opción 3: Usando SSH (Si tienes SSH key)

```bash
# 1. Crear repo en GitHub.com (ver Opción 2, Paso 1)

# 2. Inicializar y subir con SSH
cd enerted-web-redesign
git init
git add .
git commit -m "feat: initial setup - propuesta marketing digital"
git remote add origin git@github.com:henryor/enerted-web-redesign.git
git branch -M main
git push -u origin main
```

---

## ✅ Verificar que Funcionó

```bash
# Ver remoto configurado
git remote -v

# Deberías ver algo como:
# origin  https://github.com/henryor/enerted-web-redesign.git (fetch)
# origin  https://github.com/henryor/enerted-web-redesign.git (push)
```

---

## 🔐 Si Usas HTTPS (Sin SSH Key)

GitHub requiere token de autenticación. Sigue estos pasos:

### 1. Crear Personal Access Token (PAT)

1. Ir a https://github.com/settings/tokens
2. Hacer clic en "Generate new token"
3. Nombre: `enerted-web-redesign-token`
4. Permisos: Seleccionar `repo` (acceso completo)
5. Generar token
6. **Copiar y guardar** el token (no lo podrás ver de nuevo)

### 2. Usar el Token

```bash
# Cuando Git te pida contraseña, pega el token:
cd enerted-web-redesign
git init
git add .
git commit -m "feat: initial setup - propuesta marketing digital"
git remote add origin https://github.com/henryor/enerted-web-redesign.git
git push -u origin main

# Git pedirá:
# Username: henryor
# Password: <pega aquí tu token>
```

### 3. Guardar el Token (Opcional)

Para no tener que pegarlo cada vez:

```bash
# En macOS/Linux
git config --global credential.helper osxkeychain

# En Windows
git config --global credential.helper wincred

# En Linux
git config --global credential.helper store
# Luego hacer git push una vez, y guardará el token
```

---

## 📋 Estructura después de subir

Tu repositorio lucirá así:

```
henryor/enerted-web-redesign
├── docs/
│   ├── PROPUESTA_MARKETING_DIGITAL.md
│   └── ... (otros archivos)
├── src/
│   └── (código Next.js - se agregará después)
├── templates/
├── .gitignore
├── README.md
└── IMPLEMENTACION.md
```

---

## 🚀 Próximos Pasos Después de Subir

1. **Proteger rama main**:
   - Ir a Settings → Branches
   - Agregar "main" con restricciones

2. **Agregar colaboradores**:
   - Settings → Collaborators
   - Invitar a miembros del equipo

3. **Configurar Actions (CI/CD)** (Opcional):
   - Ir a Actions
   - Crear workflow para tests automáticos

4. **Crear Issues** para tareas:
   - Issues → New issue
   - Crear uno por hito del cronograma

---

## ❓ Troubleshooting

### Error: "fatal: remote origin already exists"
```bash
# Borrar el remoto antiguo
git remote remove origin

# Volver a agregar
git remote add origin https://github.com/henryor/enerted-web-redesign.git
```

### Error: "Permission denied (publickey)"
- Verificar SSH keys: `ssh -T git@github.com`
- Si no funciona, usar HTTPS en lugar de SSH

### Error: "Updates were rejected"
```bash
# Forzar push (úsalo solo si estás seguro)
git push -u origin main --force
```

---

## 💡 Tips

- **Commits frecuentes**: Hacer commit cada sección completada
- **Mensajes claros**: Usar prefijos: `feat:`, `fix:`, `docs:`, etc.
- **Ramas por feature**: Para trabajo en equipo, crear ramas: `feature/seo-content`, `feature/seo-ads`, etc.
- **Pull Requests**: Usar PRs para revisar cambios antes de mergear

---

## 📚 Recursos Útiles

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [GitHub CLI](https://cli.github.com/)

---

**¿Necesitas ayuda?** Contacta: henry@kyrbot.com | +57 315 633 8081

