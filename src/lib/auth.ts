import NextAuth from 'next-auth'
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from "./prisma"
import GithubProvider from 'next-auth/providers/github'
import {stripe} from './stripe'

export const {auth, handlers} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GithubProvider],
  events: {
    createUser: async (message) => {
      const userId = message.user.id
      const email = message.user.email

      if(!userId || !email) return
      const stripeCustomer = await stripe.customers.create({
        email,
        name: message.user.name ?? undefined
      })

      await prisma.user.update({
        where: {id: userId},
        data: {stripeCustomerId: stripeCustomer.id}
      })
    },
  },
});