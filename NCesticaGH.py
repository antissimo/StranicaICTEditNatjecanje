import math
import matplotlib.pyplot as plt
import copy
global pullConstant
pullConstant=900
dt=0.001
timeLapse=4
#it calculates in timeLapse/dt cycles
t=0

times=[]
tocke=[]

brojTocaka=int(input("Koliko tocaka zelite:"))
nizovi=[]
print("Upisite toliko parova brojeva")
for i in range(brojTocaka):
    x,y=map(int,input().split())
    tocke.append([x,y])
   

    
    






def change(tocka1,tocka2,distance,direction,power):
    
    if tocka1[0]<tocka2[0]:
        xchange1=math.cos(direction)*power
        xchange2=-math.cos(direction)*power
    else:
        xchange1=-math.cos(direction)*power
        xchange2=math.cos(direction)*power
    if tocka1[1]<tocka2[1]:
        ychange1=math.sin(direction)*power
        ychange2=-math.sin(direction)*power
    else:
        ychange1=-math.sin(direction)*power
        ychange2=math.sin(direction)*power
    return [xchange1,ychange1,xchange2,ychange2,tocke.index(tocka1),tocke.index(tocka2)]
def distance(tocka1,tocka2):
    return math.sqrt((tocka1[0]-tocka2[0])**2+(tocka1[1]-tocka2[1])**2)
def angle(tocka1,tocka2):
    if tocka2[0]-tocka1[0]==0:
        return(math.pi/2)
    else:
        return math.atan((tocka2[1]-tocka1[1])/(tocka2[0]-tocka1[0]))
    
def privlacenjeUkupno(tocke,dt,brojTocaka):
    distances=[]
    powers=[]
    directions=[]
    for i in range(brojTocaka):
        for j in range(i+1,brojTocaka,1):
            distances.append(distance(tocke[i],tocke[j]))
            directions.append(angle(tocke[i],tocke[j]))
            powers.append((pullConstant/distance(tocke[i],tocke[j])**2)*dt)



    changes=[]
    counter=0
    for i in range(brojTocaka):
        for j in range(i+1,brojTocaka,1):
            changesCurrent=change(tocke[i],tocke[j],distances[counter],directions[counter],powers[counter])
            changes.append(changesCurrent)
            counter+=1
    indexi=[]
    for stvar in changes:
        tocke[stvar[4]][0]+=stvar[0]
        tocke[stvar[4]][1]+=stvar[1]
        tocke[stvar[5]][0]+=stvar[2]
        tocke[stvar[5]][1]+=stvar[3]
    return tocke

while t<timeLapse:
    
    noveKoordinate=privlacenjeUkupno(tocke,dt,brojTocaka)
    zaAppendat=copy.deepcopy(tocke)
    nizovi.append(zaAppendat)
    times.append(t)
    t+=dt
xevi1=[i[0][0] for i  in nizovi]
xevi2=[i[1][0] for i  in nizovi]
xevi3=[i[2][0] for i  in nizovi]
xevi4=[i[3][0] for i  in nizovi]
plt.plot(times,xevi1)
plt.plot(times,xevi2)
plt.plot(times,xevi3)
plt.plot(times,xevi4)

plt.show()
    
    
    
    
    









