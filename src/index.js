import { Node, Network, Router } from 'network-route-planner'

const network = new Network()

network.addNode(new Node('A'))
network.addNode(new Node('B'))
network.addNode(new Node('C'))
network.addNode(new Node('D'))

network.connect('A', 'B', 5)
network.connect('A', 'C', 4)
network.connect('B', 'D', 7)
network.connect('C', 'D', 3)

const router = new Router(network)

const route = router.findRoute('A', 'D')
const shortestRoute = router.findShortestRoute('A', 'D')

console.log(
  'Route:',
  route.nodes.map(node => node.id),
  'Cost:',
  route.cost
)

console.log(
  'Shortest route:',
  shortestRoute.nodes.map(node => node.id),
  'Cost:',
  shortestRoute.cost
)