export function setError(element){
    document.getElementById(`${element}-error`).textContent = "This field is required"
    document.getElementById(`${element}-label`).style.color = "#f19ea6"
}

export function showMessage(toast, severity, summary, detail){
    toast.current.show({severity: severity, summary: summary, detail: detail, life: 3000})
}

export function unsetError(element){
    document.getElementById(`${element}-error`).textContent = ""
    document.getElementById(`${element}-label`).style.color = "rgba(255, 255, 255, 0.6)"
}