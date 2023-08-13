import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TodoCreateInput) {
    return await this.prisma.todo.create({ data });
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.TodoUpdateInput) {
    return await this.prisma.todo.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.prisma.todo.delete({ where: { id } });
  }
}
