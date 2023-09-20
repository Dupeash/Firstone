import pandas as pd
from sklearn.datasets import load_iris
from sklearn.metrics import accuracy_score

data=load_iris()
x=data.data
y=data.target
from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test = train_test_split(x,y,random_state=50,test_size=0.25)
from sklearn.tree import DecisionTreeClassifier
clf=DecisionTreeClassifier()
clf.fit(x_train,y_train)
y_pred=clf.predict(x_test)
print('Train data accuracy:',accuracy_score(y_true=y_train,y_pred=clf.predict(x_train)))
print('Test data accuracy:',accuracy_score(y_true=y_test,y_pred=y_pred))


import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
x=[4,5,10,4,3,11,14,6,10,12]
y=[21,19,24,17,16,25,24,22,21,21]
data=list(zip(x,y))
print(data)

inertias=[]
for i in range(1,11):
    kmeans=KMeans(n_clusters=i)
    kmeans.fit(data)
    inertias.append(kmeans.inertia_)
plt.plot(range(1,11),inertias,marker='o')
plt.title('Elbow Method')
plt.xlabel('no of clusters')
plt.ylabel('Inertia')
plt.show()

kmeans=KMeans(n_clusters=2)
kmeans.fit(data)
plt.scatter(x,y,c=kmeans.labels_)
plt.show()




