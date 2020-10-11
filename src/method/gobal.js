
export const setUser =(data)=>{
  return localStorage.setItem("User",data);
}

export const getUser = () => {
  let user = localStorage.getItem("User");
  if (!user) user = localStorage.getItem("UserAdmin");
  return JSON.parse(user);
};

export const removeLocalItem = (key) =>{
  return localStorage.removeItem(key);
}

export const setStep = (location) => {
  return sessionStorage.setItem("Step", location);
};


export const getStep = ()=>{
    return sessionStorage.getItem("Step");
}
