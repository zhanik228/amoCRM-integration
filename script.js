const baseURL = "https://zhan142004.amocrm.ru/"
const getContactListQuery = `${baseURL}api/v4/contacts`

const getContacts = async () => {
    try {
        const res = await fetch(getContactListQuery)
        const data = res.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}


getContacts()